<script>
    import Title from "$lib/components/Title.svelte";
    import ToolItem from "$lib/components/ToolItem.svelte";
    import * as tools_dict from '/src/data/tools.json';

    let tools = [];
    tools = tools_dict.default;
</script>

<Title text="Tools" />

<h1>
    These are tools and interventions developed through my research.
</h1>

<hr />

<section id="tools">
    <div class="pub-cards">
        {#each tools as tool}
            <div class="item-list">
                <ToolItem {tool} />
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
