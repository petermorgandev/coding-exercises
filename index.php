<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Pauper Card Guessing Game</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet"> 
	<link rel="stylesheet" href="css/styles.css" type="text/css">
	<link rel="stylesheet" href="css/mana-cost.css" type="text/css">
</head>
<body>
	<?php
		$url = 'https://api.magicthegathering.io/v1/cards?pageSize=1&random=true&rarity=common';
		$file= file_get_contents($url);	
		$json = json_decode($file);
		$json = $json->cards[0];
	
		$cardImage = $json->imageUrl;
		$cardName = $json->name;
	
		$replacements = array(
			"\n"     => "<br><br>",
			"{W}"    => "<i class='mana smallMana sw'></i>",
			"{U}"    => "<i class='mana smallMana su'></i>",
			"{B}"    => "<i class='mana smallMana sb'></i>",
			"{G}"    => "<i class='mana smallMana sg'></i>",
			"{R}"    => "<i class='mana smallMana sr'></i>",
			"{1}"    => "<i class='mana smallMana s1'></i>",
			"{2}"    => "<i class='mana smallMana s2'></i>",
			"{3}"    => "<i class='mana smallMana s3'></i>",
			"{4}"    => "<i class='mana smallMana s4'></i>",
			"{5}"    => "<i class='mana smallMana s5'></i>",
			"{6}"    => "<i class='mana smallMana s6'></i>",
			"{7}"    => "<i class='mana smallMana s7'></i>",
			"{8}"    => "<i class='mana smallMana s8'></i>",
			"{9}"    => "<i class='mana smallMana s9'></i>",
			"{10}"   => "<i class='mana smallMana s10'></i>",
			"{11}"   => "<i class='mana smallMana s11'></i>",
			"{12}"   => "<i class='mana smallMana s12'></i>",
			"{13}"   => "<i class='mana smallMana s13'></i>",
			"{14}"   => "<i class='mana smallMana s14'></i>",
			"{15}"   => "<i class='mana smallMana s15'></i>",
			"{16}"   => "<i class='mana smallMana s16'></i>",
			"{17}"   => "<i class='mana smallMana s17'></i>",
			"{18}"   => "<i class='mana smallMana s18'></i>",
			"{19}"   => "<i class='mana smallMana s19'></i>",
			"{20}"   => "<i class='mana smallMana s20'></i>",
			"{X}"    => "<i class='mana smallMana sx'></i>",
			"{Y}"    => "<i class='mana smallMana sy'></i>",
			"{Z}"    => "<i class='mana smallMana sz'></i>",
			"{S}"    => "<i class='mana smallMana ss'></i>",
			"{W/U}"  => "<i class='mana smallMana swu'></i>",
			"{W/B}"  => "<i class='mana smallMana swb'></i>",
			"{U/B}"  => "<i class='mana smallMana sub'></i>",
			"{U/R}"  => "<i class='mana smallMana sur'></i>",
			"{B/R}"  => "<i class='mana smallMana sbr'></i>",
			"{B/G}"  => "<i class='mana smallMana sbg'></i>",
			"{R/W}"  => "<i class='mana smallMana srw'></i>",
			"{R/G}"  => "<i class='mana smallMana srg'></i>",
			"{G/W}"  => "<i class='mana smallMana sgw'></i>",
			"{G/U}"  => "<i class='mana smallMana sgu'></i>",
			"{2/W}"  => "<i class='mana smallMana s2w'></i>",
			"{2/U}"  => "<i class='mana smallMana s2u'></i>",
			"{2/B}"  => "<i class='mana smallMana s2b'></i>",
			"{2/R}"  => "<i class='mana smallMana s2r'></i>",
			"{WP}"   => "<i class='mana smallMana swp'></i>",
			"{UP}"   => "<i class='mana smallMana sup'></i>",
			"{BP}"   => "<i class='mana smallMana sbp'></i>",
			"{RP}"   => "<i class='mana smallMana srp'></i>",
			"{T}"    => "<i class='mana smallMana st'></i>",
			"{Q}"    => "<i class='mana smallMana sq'></i>",
			"{C}"    => "<i class='mana smallMana scl'></i>"
		);
	?>
	<div class="sidebar">
		<h1>Pauper Guessing Game</h1>
		<p>This is a guessing game for Magic: The Gathering streamers. Fill dead air by providing your viewers with a fun guessing game. The game is configured to only show cards printed at common rarity.</p>
		<p>To use the game in your stream crop the browser window to the black box in your streaming software. The card will be revealed in 1 minute. Refresh the browser for a new card.</p>
		<p>Your card is...</p>

		<p><img src ="<?php echo $cardImage ?>" alt="<?php echo $cardName = $json->name; ?>"></p>
	</div>
	<div class="game">
		<ul class=''>
			<?php
				$cardCMC = $json->cmc;
				$cardType = $json->type; 
			?>
			<li class=''><img class='fade three' src="<?php echo $cardImage; ?>"</li>
			<li class='fade '><strong>CMC:</strong> <?php echo $cardCMC; 
				?> </li>
			<li class='fade one'><strong>Type:</strong> <?php echo $cardType; ?> </li>
			<li class='fade two' id="cost"><strong>Mana Cost:</strong> <?php
				$cardCost = strtr($json->manaCost, $replacements); 
				echo $cardCost; ?> </li>					
			<li class='fade three'><strong>Name:</strong> <?php echo  $cardName; ?> </li>
			<li class='fade three'><strong>Text:</strong>  <?php 
				$cardText = strtr($json->text, $replacements); 
				echo $cardText; ?> </li>
		</ul>
	</div>
  </body>
</html>