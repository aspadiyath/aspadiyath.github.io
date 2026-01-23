<script>
    import Title from "$lib/components/Title.svelte";
    import Publication from "$lib/components/Publication.svelte";
    import * as pub_dict from '/src/data/pubs.json';

    let publications = [];
    publications = pub_dict.default;

    // Group publications by year
    let publicationsByYear = {};
    publications.forEach(pub => {
        if (!publicationsByYear[pub.year]) {
            publicationsByYear[pub.year] = [];
        }
        publicationsByYear[pub.year].push(pub);
    });

    // Get sorted years (descending)
    let years = Object.keys(publicationsByYear).sort((a, b) => b - a);

    // Year milestones
    const yearMilestones = {
        2026: "2026 - Graduating with PhD in Information",
        2021: "2021 - Graduated with Master's in Computer Science; Began PhD",
        2020: "2020 - Began Master's Degree"
    };

    function getYearHeader(year) {
        return yearMilestones[year] || year;
    }
</script>

<Title text="Publications" />

<h1> These are my academic publications. </h1>
<p>
    I have published {publications.length} peer-reviewed papers!
</p>
<p>
    You can see who's citing them on
    <a href="https://scholar.google.com/citations?user=uZf5ZssAAAAJ"
    >Google Scholar</a
    >,
    <a href="https://www.semanticscholar.org/author/Aadarsh-Padiyath/1845856996"
    >Semantic Scholar</a
    >, or
    <a href="https://dl.acm.org/profile/99659566004">ACM</a>.
</p>

<hr />

<section id="publications">
    {#each years as year}
        <h2>{getYearHeader(year)}</h2>
        {#each publicationsByYear[year] as publication}
            <Publication paper={publication} />
        {/each}
    {/each}
</section>


