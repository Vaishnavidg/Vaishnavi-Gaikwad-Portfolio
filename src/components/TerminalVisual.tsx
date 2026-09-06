export function TerminalVisual() {
  return (
    <div className="terminal reveal" data-testid="visual-terminal">
      <div className="terminal-top">
        <div className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="mono">vaishnavi/profile.ts</span>
        <span className="mono">● live</span>
      </div>
      <div className="terminal-body">
        <div className="code-line">
          <span className="line-no">01</span>
          <span className="code">
            <span className="key">const</span> developer = {"{"}
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">02</span>
          <span className="code">
            &nbsp;&nbsp;name: <span className="value">'Vaishnavi Gaikwad'</span>
            ,
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">03</span>
          <span className="code">
            &nbsp;&nbsp;roles: [<span className="value">'full-stack'</span>,{" "}
            <span className="value">'blockchain'</span>,{" "}
            <span className="value">'AI'</span>],
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">04</span>
          <span className="code">&nbsp;&nbsp;focus: [</span>
        </div>
        <div className="code-line">
          <span className="line-no">05</span>
          <span className="code">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="value">'product'</span>,
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">06</span>
          <span className="code">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="value">'problem-solving'</span>,
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">07</span>
          <span className="code">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="value">'clean-code'</span>
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">08</span>
          <span className="code">&nbsp;&nbsp;],</span>
        </div>
        <div className="code-line">
          <span className="line-no">09</span>
          <span className="code">
            &nbsp;&nbsp;experience: <span className="value">'3+ years'</span>,
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">10</span>
          <span className="code">
            &nbsp;&nbsp;approach:{" "}
            <span className="value">'ship with intent'</span>,
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">11</span>
          <span className="code">
            &nbsp;&nbsp;currently:{" "}
            <span className="value">'building solutions 🚀'</span>
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">12</span>
          <span className="code">{"}"}</span>
        </div>
        <div className="code-line" style={{ marginTop: 18 }}>
          <span className="line-no">13</span>
          <span className="code" />
        </div>
        <div className="code-line">
          <span className="line-no">14</span>
          <span className="code comment">
            // always learning, always building
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">15</span>
          <span className="code comment">
            // open to meaningful opportunities
          </span>
        </div>
        <div className="code-line">
          <span className="line-no">16</span>
          <span className="code">
            <span className="terminal-cursor" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
