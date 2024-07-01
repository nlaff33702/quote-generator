function generate(){
    var quotes={
        "- Pierce Brown": `“Man cannot be freed by the same injustice that enslaved it.”`,
        "- Mary Astell": `"If all men are born free, how is it that all women are born slaves?”`,
        "- Aaron Lauritsen": `"The struggles we endure today will be the good old days we laugh about tomorrow.”`
    }

    var authors= Object.keys(quotes);

    var author=authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

    console.log(authors);
}