import "./Deatils.css";

export default function Deatils({ txt }) {
  return (
    <div className="Deatils">
      <span>{txt}</span>
      <div className="list">
        <div className="head">
          <p>Global Trade Platform</p>
        </div>
        <div className="card">
          <h4>Cross-border Logistic</h4>
          <div className="head">
            <p>Ocean: FCL</p>
          </div>
          <p>Ocean: LCL</p>
          <p>International Air</p>
          <p>Customs, CFS, and Handling</p>
        </div>
        <div className="card">
          <h4>Domestic Logistics</h4>
          <div className="head">
            <p>Ocean: FCL</p>
          </div>
          <p>Ocean: LCL</p>
          <p>International Air</p>
          <p>Customs, CFS, and Handling</p>
        </div>
        <div className="card">
          <h4>Trade Management Solutions</h4>
          <div className="head">
            <p>Ocean: FCL</p>
          </div>
          <p>Ocean: LCL</p>
          <p>International Air</p>
          <p>Customs, CFS, and Handling</p>
        </div>
        <div className="card">
          <h4>CogoMaps</h4>
          <div className="head">
            <p>Ocean: FCL</p>
          </div>
          <p>Ocean: LCL</p>
          <p>International Air</p>
          <p>Customs, CFS, and Handling</p>
        </div>
      </div>
    </div>
  );
}
