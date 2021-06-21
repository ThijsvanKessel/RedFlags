<html>

<head>
    <meta charset="utf-8" />
    <meta name="description" content="RedFlags">
    <title>RedFlags</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="icon" href="img/Favicon.png" type="image/x-icon">
</head>

<header id="header">
    <div id="HeaderButton">
        <button id="leaveGame">Leave Game</button>
        <button id="ShowPlayedCard">Played Card</button>
        <button id="ShowPlayedCardRed">Played Card</button>
    </div>
</header>

<body>
    <div class="parent">
        <div class="div1">
            <div id="GespeeldeKaarten">
            </div>
            <div id="KaartenSpeler">
                <div id="w1" class="WitteKaart">
                    <a id="w1-text">Default Text</a>
                </div>
                <div id="w2" class="WitteKaart">
                    <a id="w2-text">Default Text</a>
                </div>
                <div id="w3" class="WitteKaart">
                    <a id="w3-text">Default Text</a>
                </div>
                <div id="w4" class="WitteKaart">
                    <a id="w4-text">Default Text</a>
                </div>
                <div id="R1" class="RodeKaart">
                    <a id="R1-text">Default Text</a>
                </div>
                <div id="R2" class="RodeKaart">
                    <a id="R2-text">Default Text</a>
                </div>
                <div id="R3" class="RodeKaart">
                    <a id="R3-text">Default Text</a>
                </div>
                <button id="whiteplaybutton">play white cards</button>
                <button id="redplaybutton">play red card</button>
            </div>
        </div>

        <div class="div2">
            <div id="ScoreBoard">
                <table rules="rows" id="ScoreBoardTable">
                    <tr>
                        <th>ScoreBoard</th>
                    </tr>
                    <tr>
                        <td>Username<br>0 Points</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Username<br>0 Points</td>
                        <td>Single</td>
                    </tr>
                    <tr>
                        <td>Username<br>0 Points</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Username<br>0 Points</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Username<br>0 Points</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="div3">
            <div id="ChatInput">
                <input type="text" id="ChatInputField">
                <button>Chat</button>
            </div>
        </div>
    </div>

    <!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

    <!-- Custom js  -->
    <script src="js/main.js"></script>

</body>
</html>