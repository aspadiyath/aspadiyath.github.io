<script>
    export let post;
</script>

<div class="post">
    <h3><a href={post.link || `/writing/${post.slug}`} target={post.link ? '_blank' : undefined} rel={post.link ? 'noopener noreferrer' : undefined}>{post.title}</a></h3>
    <div class="post-meta">{post.date}</div>
    <p class="description">{post.description}</p>
</div>

<style>
    .post {
        padding: 1.1em 1.3em;
        border-bottom: 1px solid var(--border-color);
    }

    .post:last-child {
        border-bottom: none;
    }

    h3 {
        margin: 0 0 4px 0;
    }

    .post-meta {
        color: var(--text-muted);
        font-size: 0.875em;
        margin-bottom: 8px;
    }

    .description {
        margin: 0;
    }
</style>
