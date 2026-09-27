"""
Prova da Tarefa F: para toda chave presente na versao ANTES (commit 908a70a,
o HEAD antes de qualquer edicao desta sessao) e na versao DEPOIS (working tree
atual), compara unicodedata NFD sem marcas combinantes do valor antigo com o
novo. Tem que dar igual para toda chave NAO reescrita de proposito nos itens
A a E. As diferentes sao listadas, para conferencia manual.
"""
import json, subprocess, sys, unicodedata

BEFORE_COMMIT = "908a70a"

def strip_marks(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if not unicodedata.combining(c))

def flatten(obj, path=""):
    out = {}
    if isinstance(obj, dict):
        for k, v in obj.items():
            out.update(flatten(v, f"{path}.{k}" if path else k))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            out.update(flatten(v, f"{path}[{i}]"))
    elif isinstance(obj, str):
        out[path] = obj
    return out

def load_before(locale):
    raw = subprocess.check_output(["git", "show", f"{BEFORE_COMMIT}:messages/{locale}.json"])
    return json.loads(raw.decode("utf-8"))

def load_after(locale):
    return json.load(open(f"messages/{locale}.json", encoding="utf-8"))

def main(locale, expected_changed_prefixes):
    before = flatten(load_before(locale))
    after = flatten(load_after(locale))
    common_keys = set(before) & set(after)
    diffs = []
    for k in sorted(common_keys):
        if strip_marks(before[k]) != strip_marks(after[k]):
            diffs.append(k)

    unexpected = [k for k in diffs if not any(k.startswith(p) for p in expected_changed_prefixes)]

    print(f"=== {locale} ===")
    print(f"chaves comuns (antes e depois): {len(common_keys)}")
    print(f"chaves so em 'antes' (removidas): {len(set(before) - set(after))}")
    print(f"chaves so em 'depois' (novas, ex: wineriesBySize/productionDetail/faq novo): {len(set(after) - set(before))}")
    print(f"chaves com valor NFD-sem-marcas diferente: {len(diffs)}")
    print("--- todas as diferentes (esperado: só as reescritas de propósito nos itens A-E) ---")
    for k in diffs:
        print(f"  {k}")
    print(f"--- diferentes NAO esperadas (fora dos prefixos declarados) ---")
    if unexpected:
        for k in unexpected:
            print(f"  ⚠ {k}")
    else:
        print("  (nenhuma)")
    print()
    return unexpected

if __name__ == "__main__":
    # prefixos de chaves que eu reescrevi de proposito nos itens A-E (conteudo,
    # nao acentuacao) - é esperado que essas apareçam na lista de diferentes.
    expected_prefixes_common = [
        "hero.subtitle",
        "differentials.pioneers.cards.unique.title",
        "comparison.items.specialization.description",
        "faq.items.whatIsBacco.answer",
        "brazil.hero.title",
        "brazil.compliance.items.nfe.description",
        "brazil.integrations.items.focusnfe.title",
        "brazil.regulatory.items.guides.description",
        "comparison.highlights.compliance.description",
        "comparison.items.compliance.feature",
        "privacy.sections[2].paragraphs[0]",
        "brazil.hero.subtitle",
        "seo.softwareDescription",
        "seo.featureList.compliance",
        "countries.obligations.markets.brazil.items",
        "features.items.fiscalNotes.description",
        "features.items.envin.title",
        "features.items.envin.description",
        "faq.items.installation.answer",
        "faq.items.aiDifferential.answer",
        "faq.items.countries.question",
        "faq.items.countries.answer",
        "faq.items.languages.answer",
        "baccoCpu.closing",
        "baccoCpu.intro1",
        "differentials.pitch.items.vertical.description",
        "countries.items.brazil.features.envin",
    ]
    all_unexpected = {}
    for locale in ["pt-BR", "pt-PT"]:
        u = main(locale, expected_prefixes_common)
        all_unexpected[locale] = u

    if any(all_unexpected.values()):
        print("RESULTADO: há diferenças fora do esperado (ver acima) — revisar.")
        sys.exit(1)
    else:
        print("RESULTADO: todas as diferenças correspondem a reescritas propositais dos itens A-E.")
