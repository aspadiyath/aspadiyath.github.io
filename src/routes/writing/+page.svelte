<script>
    import Title from "$lib/components/Title.svelte";
    import WritingItem from "$lib/components/WritingItem.svelte";
    import * as writing_dict from '/src/data/writing.json';

    let posts = [...writing_dict.default].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );
</script>

<Title text="Writing" />

<h1>These are some of my notes, ramblings, and links to my <a href="https://medium.com/@the_ideal_1" target="_blank" rel="noopener noreferrer">blog posts</a>.</h1>

<hr />

<section id="writing">
    {#each posts as post}
        <WritingItem {post} />
    {/each}
</section>
