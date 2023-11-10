```
# Should all emit "source"

cd packages/a

node --import src-hook --import tsx ./src/index.ts             # FAIL 'require'
node --import src-hook --import tsx ./dist/require/index.ts    # FAIL 'require'

node --import src-hook --import tsx ./dist/import/index.ts     # PASS 'source'
```