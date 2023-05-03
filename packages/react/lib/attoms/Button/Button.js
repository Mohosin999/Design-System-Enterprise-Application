import React from 'react';

const Button = ({ title, children, onClick }) => {
    return (React.createElement("button", { className: "btn btn-primary", title: title, onClick: onClick }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
