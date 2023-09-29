import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.docs.graphql",
  documents: "./src/**/graphQuery.ts",
  generates: {
    "src/__generated__/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-rtk-query": {
            importBaseApiFrom: "src/services/api",
            exportHooks: true,
          },
        },
      ],
    },
  },
};
export default config;
