#!/usr/bin/env bash
# SessionStart hook — Bacco stack cross-repo issues check.
set -uo pipefail
REPO="lussandro/bacco-site"
emit_json() {
  python3 -c "
import json, sys
out = {'hookSpecificOutput':{'hookEventName':'SessionStart','additionalContext':sys.argv[1]}}
print(json.dumps(out))
" "$1"
}
if ! command -v gh >/dev/null 2>&1; then
  emit_json "[startup] gh CLI não instalado — skip."
  exit 0
fi
ISSUES_JSON=$(gh issue list --repo "$REPO" --state open --label pdv-integration --json number,title --limit 50 2>/dev/null || echo "[]")
CTX=$(python3 - <<PYEOF "$ISSUES_JSON" "$REPO"
import sys, json
data = json.loads(sys.argv[1])
repo = sys.argv[2]
if not data:
    print(f"[startup {repo}] Nenhuma issue cross-repo aberta (label pdv-integration). Caminho livre.")
else:
    lines = [f"[startup {repo}] ⚠️ {len(data)} issue(s) cross-repo abertas com label 'pdv-integration'."]
    lines.append("")
    lines.append("Lista resumida:")
    for i in data:
        lines.append(f"  #{i['number']}  {i['title']}")
    lines.append("")
    lines.append(f"REGRA: priorizar resolução destas issues antes de novas tasks. Ver ~/Obsidian/Vault/projetos/_shared/cross-repo-issues.md.")
    print("\n".join(lines))
PYEOF
)
emit_json "$CTX"
