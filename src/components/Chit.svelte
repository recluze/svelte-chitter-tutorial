<script>
    import { ChitStore } from "../stores/ChitStore";

    export let id;
    export let content; 
    export let author; 
    export let handle; 
    export let likes;


    // update likes count here
    function onLike(id) {
        console.log("Liked!", id);
        ChitStore.likeChit(id);
    }

</script>

<div class="chit" id="chit-{id}">
    <div class="author">{author}</div>
    <div class="handle">{handle}</div>
    <div class="chit-content">
        {content}
    </div>
    <div class="chit-meta">
        <div class="rechit">
            <i class="fa-solid fa-retweet" /> 2
        </div>
        <div class="like" on:click={ () => onLike(id) }>
            <i class="fa-solid fa-thumbs-up btn-like" /> {likes}
        </div>
        <div class="save">
            <i class="fa-solid fa-share-alt" />
        </div>
        <div class="save">
            <i class="fa-solid fa-trash" />
        </div>
    </div>
</div>

<style>
    .chit {
        border: 1px solid #62676d22;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        font-weight: lighter;
        background-color: #282c34;
        box-shadow: 0px 0px 20px #1d2025;
        margin-top: 30px;
    }

    .chit:hover {
        border: 1px solid #62676d99;
    }

    .chit-meta {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        margin: 0px;
        opacity: 0.5;
        font-size: x-small;
        border-top: 1px solid #dce4ec22;
        padding-bottom: 0px;
    }

    .btn-like:active {
        color:  rgb(103, 212, 255);
        opacity: 1;
    }

    .chit-meta i {
        cursor: pointer;
    }

    .author {
        font-weight: bold;
        margin: 10px 0px;
        margin-bottom: 0px;
    }

    .handle {
        font-weight: 100;
        opacity: 0.6;
        font-size: 0.76em;
    }

    .chit-content {
        margin: 20px 0px;
        opacity: 0.8;
        padding-right: 15px;
        font-size: small;
    }
</style>
