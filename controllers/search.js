module.exports = {
  getResults: async (req, res) => {
    try {
      const searchQuery = req.query.q;
      console.log(process.env.CUSTOM_SEARCH_API, process.env.CX)
      const searchResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&siteSearch=jstor.org&key=${process.env.CUSTOM_SEARCH_API}&cx=${process.env.CX}`,
        { method: "GET" }
      );

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text();
        console.log(
          `Search request failed: ${searchResponse.status}`,
          errorText
        );
        return res.redirect("/feed");
      }

      const searchData = await searchResponse.json();
      const items = searchData.items || [];

      // Render the results using EJS
      res.render("results.ejs", { items, searchQuery });
    } catch (error) {
      console.error("Error fetching artworks:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
