import * as React from 'react';

export interface CommunityStatsProps { top100Stats: Top100Stats };
export interface Top100Stats { currentRank: number, isTop100: boolean, celNeededToTop100: number }

export const CommunityStats: React.FC<CommunityStatsProps> = (props) => {
    return <div className="CommunityStats p-3">
        {props.top100Stats.isTop100 && 
            <span>Your current Top 100 HODLr rank is: <strong>{props.top100Stats.currentRank}</strong>, congratulations!!</span>
        }

        {!props.top100Stats.isTop100 &&
            <span>You need another <strong>{props.top100Stats.celNeededToTop100}</strong> to reach Top 100 CEL HODLers.</span>
        }
        </div>;
}