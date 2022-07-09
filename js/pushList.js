oneLi = `
    <li><a class="selling" href="link" target="_blank">animalName</a>
                <div class="curr">
                    <div class="p-img">
                        <a title="animalName" href="link">
                            <img src="images/imgName" alt="animalName">
                        </a>
                    </div>
                    <div class="p-name">
                        <a title="animalName" href="link">animalName</a>

                    </div>
                </div>
            </li>
`;
animals = ["鲨鱼", "狗", "猫","鸭子","🦊","长颈鹿","狮子🦁","熊","小猪","豹子","乌龟🐢","北极熊","狼🐺"];
animalImgs = ["sharkBIgNose.jpg", "xiaogou-1.jpg", "cat.jpg", "duck.jpg", "fox.jpg", "giraffe.jpg", "lion.jpg",
     "bear.jpg", "pig.jpg", "豹子.jpg", "乌龟.jpg", "北极熊.jpg", "狼.jpg"];
lis = [];
linkPreffix="images/";
let li;
for (let i = 0; i < animals.length; i++) {
    li = oneLi.replaceAll("animalName", animals[i]);
    li = li.replaceAll("imgName", animalImgs[i]);
    li = li.replaceAll("link", linkPreffix + animalImgs[i]);

    lis.push(li);
}
$("#listAnimals ul").html(lis);