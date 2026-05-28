<script>
    import Title from "$lib/components/Title.svelte";
    import WritingItem from "$lib/components/WritingItem.svelte";
    import * as writing_dict from '/src/data/writing.json';

    let posts = [...writing_dict.default].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );
</script>

<Title text="Writing" />

<h1>These are some of my notes, ramblings, and links to my <a href="https://ideallab.substack.com?utm_source=aspadiyath.github.io" target="_blank" rel="noopener noreferrer">blog posts</a>.</h1>

<hr />

<section id="writing">
    <div class="pub-cards">
        {#each posts as post}
            <div class="item-list">
                <WritingItem {post} />
            </div>
        {/each}
    </div>
</section>

<style>
    .pub-cards {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .pub-cards :global(.item-list) {
        margin-bottom: 0;
    }
</style>
