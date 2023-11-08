import "./styles/Interface.styles.css";

function Interface() {
    const bibleText = "Blessed are those whose ways are blameless, who walk according to the law of the Lord.";
          return (
              <div className="jumbotron">
                  <h1 className="display-1">God wants to have a relationship with you!</h1>
                  <p className="header-one">{ bibleText }</p>
                  <p className="sublead">Psalm 119:1 (NIV)</p>
                  <p className="lead">
                      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>
              </div>
          );
}

export default Interface;
