let HOME_TEAM_SCORE = 1;

function tournamentWinner(competitions, results) {
	let teams = {"": 0};
	let bestTeam = "";
	
	for (let competition = 0; competition < competitions.length; competition ++) {
		let currentCompetition = competitions[competition];
		let firstTeam = currentCompetition[0];
		let secondTeam = currentCompetition[1];

        let winningTeam = secondTeam;
		
		if (results[competition] === HOME_TEAM_SCORE) {
            winningTeam = firstTeam;	
		}

        if (!teams[winningTeam]) {
            teams[winningTeam] = 1;
        } else {
            teams[winningTeam] += 1;
        }

        if (teams[bestTeam] < teams[winningTeam]) {
            bestTeam = winningTeam;
        }
	}

	return bestTeam;
}

tournamentWinner([ ["HTML", "Java"],
["Java", "Python"],
["Python", "HTML"],
["C#", "Python"],
["Java", "C#"],
["C#", "HTML"],
["SQL", "C#"],
["HTML", "SQL"],
["SQL", "Python"],
["SQL", "Java"]],[0, 0, 0, 0, 0, 0, 1, 0, 1, 1])
