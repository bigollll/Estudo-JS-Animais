export default [
  {
    rules: {
      //"no-console": "error"
      indent: ["error", 2], //erro de identação
      "keyword-spacing": "error", //espacamento indevido
      "no-multiple-empty-lines": "error", //não deixa pular linha e n tem nada
      "eol-last": ["error", "always"], // sempre ter uma ultima linha vazia
      semi: ["error", "always"], // sempre ter ; no final
      "no-trailing-spaces": "error", // espaços sobrando
      "operator-assignment": "error", //evita duplicidade, por exemplo start = start + incremento que pode ser escrito start += incremento
      "no-inner-declarations": [
        //não deixa function ser declarada dentro de um if
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
