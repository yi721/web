function putVoteOnclick() {

    let $vote = $("#vote");
    $vote.find(".vote-btn").click(function () {

        let li = $(this).parent();
        animalName = li.text().replaceAll("投票", "");
        val = li.val().trim();
        p = $(this).siblings("p");
        scoreText=p.text().replaceAll("分数: ","");
        score = parseInt(scoreText);
        score++;
        scoreTextOut="分数: "+score ;
        p.text(scoreTextOut);

    });
}

function putVote() {

    let onRow = `  <div class="col">
                    <div class="img-container">
<!--                        style="display: block"-->
                        <img src="images/#imgName#.jpg" class="heart-jump " alt="heart" />
                    </div>
                    <div class=" "></div>
<!--                    box-->
<!-- style="background-color:yellow;"-->
                    <div class="">
                        <button class="vote-btn hover-shake">投票</button>
                        <p class="">分数: 1</p> 
<!--                        margin-left-10vw-->
                    </div>
                </div>`;

    let imgNameList = ["fox", "xiaomao1", "hh", "b-ad1", "b-ad2"];
    let rowsHtml = "";
    for (let i = 0; i < imgNameList.length; i++) {
        rowsHtml += onRow.replaceAll("#imgName#", imgNameList[i]);
    }
    $("#vote").html(rowsHtml);
}

putVote();
putVoteOnclick();