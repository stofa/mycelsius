import * as React from 'react';
;
export const CommunityStats = (props) => {
    return React.createElement("div", { className: "CommunityStats p-3" },
        props.top100Stats.isTop100 &&
            React.createElement("span", null,
                "Your current Top 100 HODLr rank is: ",
                React.createElement("strong", null, props.top100Stats.currentRank),
                ", congratulations!!"),
        !props.top100Stats.isTop100 &&
            React.createElement("span", null,
                "You need another ",
                React.createElement("strong", null, props.top100Stats.celNeededToTop100),
                " to reach Top 100 CEL HODLers."));
};
//# sourceMappingURL=CommunityStats.js.map