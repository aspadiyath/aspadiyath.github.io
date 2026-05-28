<script>
    import Title from "$lib/components/Title.svelte";
    import Publication from "$lib/components/Publication.svelte";
    import * as pub_dict from '/src/data/pubs.json';

    let publications = [];
    publications = pub_dict.default;

    // Separate in-progress and published papers
    let inProgressPapers = publications.filter(pub => pub.status === "in progress");
    let publishedPapers = publications.filter(pub => pub.status !== "in progress");

    // Group published publications by year
    let publicationsByYear = {};
    publishedPapers.forEach(pub => {
        if (!publicationsByYear[pub.year]) {
            publicationsByYear[pub.year] = [];
        }
        publicationsByYear[pub.year].push(pub);
    });

    // Get sorted years (descending)
    let years = Object.keys(publicationsByYear).sort((a, b) => b - a);

    // Year milestones
    const yearMilestones = {
        2026: "2026 - Graduating with PhD in Information; Began Postdoctoral Research Fellowship",
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
    I have published {publishedPapers.length} peer-reviewed papers!
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

{#if inProgressPapers.length > 0}
    <section id="in-progress">
        <h2>In Progress</h2>
        <div class="pub-cards">
            {#each inProgressPapers as publication}
                <div class="item-list in-progress-card">
                    <Publication paper={publication} />
                </div>
            {/each}
        </div>
    </section>
    <hr />
{/if}

<section id="publications">
    {#each years as year}
        <h2>{getYearHeader(year)}</h2>
        <div class="pub-cards">
            {#each publicationsByYear[year] as publication}
                <div class="item-list">
                    <Publication paper={publication} />
                </div>
            {/each}
        </div>
    {/each}
</section>

<style>
    h2 {
        font-size: 0.82em;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-top: 1.75em;
        margin-bottom: 0.65em;
        padding-bottom: 0.4em;
        border-bottom: 1px solid var(--border-color);
    }

    #in-progress h2 {
        margin-top: 0;
    }

    .pub-cards {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 0.75em;
    }

    .pub-cards :global(.item-list) {
        margin-bottom: 0;
    }

    .in-progress-card {
        background: transparent;
        border-style: dotted;
    }
</style>


