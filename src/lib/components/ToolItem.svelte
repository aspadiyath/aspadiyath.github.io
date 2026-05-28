<script>
    export let tool;
</script>

<div class="tool">
    <div class="tool-header">
        <h3><a href={tool.link}>{tool.name}</a></h3>
    </div>
    <div class="tool-meta">{tool.type} · {tool.year}</div>

    <p class="description">{tool.description}</p>
</div>

<style>
    .tool {
        padding: 1.1em 1.3em;
        border-bottom: 1px solid var(--border-color);
    }

    .tool:last-child {
        border-bottom: none;
    }

    .tool-header {
        margin-bottom: 4px;
    }

    h3 {
        margin: 0 0 4px 0;
    }

    .tool-meta {
        color: var(--text-muted);
        font-size: 0.875em;
        margin-bottom: 8px;
    }

    .description {
        margin: 0;
    }
</style>
