<script>
    import * as ppl_dict from '/src/data/people.json';

    let ppl = [];
    ppl = ppl_dict.default;
    export let paper;
</script>

{#each paper.authors as author, index}
    {@const collaborator = ppl.find((person) => person.id === author)}
    {#if collaborator === undefined}{author}{:else if collaborator.url === undefined}{
        collaborator.name
    }{:else}<a href="{collaborator.id === 'aadarsh' ? '/': collaborator.url}"
    >{#if collaborator.id === 'aadarsh'}<strong>{collaborator.name}</strong>{:else}{collaborator.name}{/if}</a>{/if}{index < paper.authors.length - 1 ? ", " : ""}{/each}