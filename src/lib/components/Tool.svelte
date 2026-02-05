<script>
    import * as tools_dict from '/src/data/tools.json';

    export let id;

    let tools = tools_dict.default;
    $: tool = tools.find((t) => t.id === id);
</script>

{#if tool}
    <div class="tool-header">
        <h1>{tool.name}</h1>
        <div class="tool-meta">
            {#if tool.type}
                <span class="tool-type">{tool.type}</span>
            {/if}
            {#if tool.year}
                <span class="tool-year">{tool.year}</span>
            {/if}
        </div>
    </div>

    {#if tool.description}
        <p class="tool-description">{tool.description}</p>
    {/if}

    <hr />

    <slot></slot>
{:else}
    <p>Tool not found: {id}</p>
{/if}

<style>
    .tool-header {
        margin-bottom: 1.5em;
    }

    .tool-header h1 {
        margin-bottom: 0.5em;
    }

    .tool-meta {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        font-size: var(--small-font-size);
        color: #666;
    }

    .tool-type {
        font-style: italic;
    }

    .tool-description {
        font-size: 1.1em;
        line-height: 1.6;
        margin-bottom: 1.5em;
    }
</style>
