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
        margin-bottom: 40px;
        padding-bottom: 30px;
        border-bottom: 2px solid #eee;
    }

    h3 {
        margin: 0;
        font-size: 1.3em;
    }

    h3 a {
        color: var(--link-color) !important;
        text-decoration: none;
    }

    h3 a:hover {
        text-decoration: underline;
    }

    .post-meta {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 12px;
    }

    .description {
        margin: 12px 0;
        line-height: 1.6;
    }
</style>
