module.exports = {
  src: ".",
  schema: "./schemas/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**",  "**/schemas/**"],
  language: 'typescript',
  artifactDirectory: './schemas/__generated__'
}