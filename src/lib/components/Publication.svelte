<script>
    import Authors from "$lib/components/Authors.svelte";
    import * as tools_dict from '/src/data/tools.json';

    export let paper;

    $: relatedTools = tools_dict.default.filter(t => t.papers && t.papers.includes(paper.id));
</script>

{#if paper.status === "in progress" || paper.status === "accepted"}
    <div id="{paper.id}" class="paper in-progress">
        {paper.title}
        {#if paper.note}
            <br /><em>{paper.note}</em>
        {:else if paper.source}
            <br /><em>{paper.source}</em>
        {/if}
    </div>
{:else}
    <div id="{paper.id}" class="paper">
        {#if paper.doi}
            <a href={paper.doi}>{paper.title}</a>
        {:else}
            <strong>{paper.title}</strong>
        {/if}
        <br />
        <small>
            <Authors {paper}/>
            ({paper.year})</small>
        <br /><small><em>{paper.source}</em>{#if paper.award}<span class="award-badge">
                {#if paper.award.toLowerCase().includes('best paper')}
                    🏆
                {:else if paper.award.toLowerCase().includes('honorable mention')}
                    🏅
                {/if}
                {paper.award}
            </span>{/if}</small>
        {#if paper.contribution}
            <span><br />
                <small>{paper.contribution}</small>
            </span>
        {/if}
        {#if relatedTools.length > 0}
            <br /><small class="related-tool">{#each relatedTools as tool, i}{#if i > 0}, {/if}{tool.type}: <a href={tool.link}>{tool.name}</a>{/each}</small>
        {/if}
    </div>
{/if}

<style>
    .paper {
        padding: 0.9em 1.1em;
        border-bottom: 1px solid var(--border-color);
    }

    .paper:last-child {
        border-bottom: none;
    }

    .paper.in-progress {
        color: var(--text-muted);
        font-style: italic;
        padding: 0.75em 1em;
    }

    .award-badge {
        margin-left: 0.3em;
        display: inline-block;
        padding: 0.15em 0.5em;
        border-radius: 0.3em;
        background: var(--light-link-color);
        border: 1px solid transparent;
        color: var(--link-color);
        font-weight: 500;
        white-space: nowrap;
    }

    .related-tool {
        font-style: italic;
    }
</style>