<script>
    import Title from "$lib/components/Title.svelte";
    import Publication from "$lib/components/Publication.svelte";
    import * as pub_dict from '/src/data/pubs.json';

    let publications = [];
    publications = pub_dict.default;
</script>

<Title text="Publications" />

<h1> These are my academic publications. </h1>
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
    {#each publications as publication}
        <Publication paper={publication} />
    {/each}
</section>


