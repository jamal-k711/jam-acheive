"use client";

export default function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-titlebar">
        <span className="code-dot red" />
        <span className="code-dot yellow" />
        <span className="code-dot green" />
        <span className="code-filename">performance_service.dart</span>
      </div>
      <div className="code-body">
        <pre>
          <span className="comment">// HRMS — Real-time Performance Engine</span>{"\n"}
          <span className="keyword">class </span><span className="class-name">PerformanceService</span> <span className="punctuation">{"{"}</span>{"\n"}
          {"  "}<span className="keyword">Future</span>&lt;<span className="keyword">void</span>&gt; <span className="method">recalculate</span>(<span className="keyword">String</span> employeeId) <span className="keyword">async</span> <span className="punctuation">{"{"}</span>{"\n"}
          {"    "}<span className="keyword">final</span> attendance = <span className="keyword">await</span> <span className="method">_fetchAttendance</span>(employeeId);{"\n"}
          {"    "}<span className="keyword">final</span> tasks = <span className="keyword">await</span> <span className="method">_fetchTasks</span>(employeeId);{"\n"}
          {"    "}<span className="keyword">final</span> score = <span className="method">_computeScore</span>(attendance, tasks);{"\n"}
          {"    "}<span className="keyword">await</span> <span className="method">_updateMetrics</span>(employeeId, score);{"\n"}
          {"  "}<span className="punctuation">{"}"}</span>{"\n"}
          <span className="punctuation">{"}"}</span>
        </pre>
      </div>
    </div>
  );
}
