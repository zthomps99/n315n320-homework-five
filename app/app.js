var GAMES = [
    {
        gameTitle: "Assassin's Creed",
        gameThumbImg: "ac_150.jpg",
        gameFullImg: "ac_300.png",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Dead Island",
        gameThumbImg: "deadisland_150.jpg",
        gameFullImg: "deadisland_300.png",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Devil May Cry 5",
        gameThumbImg: "dmc_150.jpg",
        gameFullImg: "dmc_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Sonic Generations",
        gameThumbImg: "sonic_150.jpg",
        gameFullImg: "sonic_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "E",
    },
    {
        gameTitle: "The Last of Us",
        gameThumbImg: "tlou_150.jpg",
        gameFullImg: "tlou_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Destiny 2",
        gameThumbImg: "destiny_150.jpg",
        gameFullImg: "destiny_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "T",
    },
    {
        gameTitle: "Xenoblade Chronicles",
        gameThumbImg: "xenoblade_150.jpg",
        gameFullImg: "xenoblade_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "T",
    },
    {
        gameTitle: "Dishonored",
        gameThumbImg: "dishonored_150.jpg",
        gameFullImg: "dishonored_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Watch Dogs",
        gameThumbImg: "wd_150.jpg",
        gameFullImg: "wd_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
    {
        gameTitle: "Halo 4",
        gameThumbImg: "halo_150.jpg",
        gameFullImg: "halo_300.jpg",
        gameBriefDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas",
        gameDescription: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit totam quibusdam quas, quo, ipsam voluptatem quaerat mollitia vitae repellendus quasi rem voluptate hic quidem recusandae provident ipsum accusamus nihil?",
        gameRating: "M",
    },
];

function loadData () {
    $.each(GAMES, function(index, game) {
        $("#app").append(`<div id="${index}" class="game-holder">
        <h4>${game.gameTitle}</h4>
        <div class="game-image">
            <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}">
        </div>
        <div class="brief-rating">
            <div class="brief-desc">
                ${game.gameBriefDescription}
            </div>
            <div class="rating">Rating: ${game.gameRating}</div>
        </div>
    </div>`);
    });

    // for(let i = 0; i < GAMES.length; i++){
    //     console.log(GAMES[i].gameTitle);
    // }
}

function initListeners() {}

$(document).ready(function () {
    // initListeners();
    loadData();
});