namespace company.betting;



using company.common       as common       from '../db/common';
using company.tournaments  as tournaments  from '../db/tournaments';
using company.teams        as teams        from '../db/teams';
using company.betting      as betting      from '../db/betting';
using company.matches      as matches      from '../db/matches';
using company.history      as history      from '../db/history';

service BettingService {

    // Public entities
    entity Nations           as projection on common.Nations;
    entity Teams             as projection on teams.Teams;
    entity Players           as projection on teams.Players;
    entity Tournaments       as projection on tournaments.Tournaments;
    entity Matches           as projection on matches.Matches;
    entity BetTypes          as projection on betting.BetTypes;
    entity TournamentEntries as projection on tournaments.TournamentEntries;
    entity PlayerStats       as projection on matches.PlayerStats;
    

    entity Users             as projection on common.Users;

    entity MatchBets         as projection on betting.MatchBets;

    entity TournamentBets    as projection on betting.TournamentBets;

    entity PointsHistory     as projection on history.PointsHistory;

    entity MatchBetTypeConfigs as projection on betting.MatchBetTypeConfigs;

    entity TournamentBetTypeConfigs as projection on betting.TournamentBetTypeConfigs;

    action placeBet(
        matchId     : String,
        betTypeId   : String,
        prediction  : String,
        stake       : Integer
    ) returns String;

    action resolveMatch(
        matchId   : String,
        homeScore : Integer,
        awayScore : Integer
    ) returns String;
}
