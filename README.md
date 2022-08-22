# calculator
An on-screen calculator using JavaScript, HTML, and CSS.

'''mermaid
flowchart LR
    A(number input) -.- a[var enteredNum1]
    A-->B(operator) --> C(number input) -.- d[var enteredNum2]
    C--->D(EQUALS)--->c[Results Displayed]-.->e[lcd div]
    D-.->f["clear: enteredNum1, enteredNum2"]
'''