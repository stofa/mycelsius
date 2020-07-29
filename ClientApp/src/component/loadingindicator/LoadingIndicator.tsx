import * as React from "react";

export const LoadingIndicator: React.FC<any> = (props) => {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    );
}