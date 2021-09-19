module.exports = async(client, data) => {
    client.user.setActivity(``, {
        type: "STREAMING",
        url: "https://www.twitch.tv/"
      });
}
