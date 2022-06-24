module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ACC_MNEMONIC": JSON.stringify(process.env.ACC_MNEMONIC),
      "process.env.NETWORK_URL": JSON.stringify(process.env.NETWORK_URL),
    }),
  ],
};
