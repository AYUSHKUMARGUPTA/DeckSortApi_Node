*Simple REST API to get a deck of sorted cards*


</pre>

POST /sortDeck :  pass in JSON data for a deck.
</pre>


</pre>

--Input : {
            "deck": ["3C", "JS", "2D", "PT", "10H", "KH", "8S", "4T", "AC", "4H", "RT"]
          }

</pre>

--Output : [ "4T", "PT", "RT", "2D", "8S", "JS", "3C", "AC", "4H", "10H", "KH" ]

</pre>