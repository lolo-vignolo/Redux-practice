import Router from './routes/Routes';

export function App() {
  return (
    <div className="ui cotainer grid">
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="logo"
        style={{
          width: '100%',
          height: '25%',
          position: 'relative',
          marginTop: '-51rem',
        }}
      />
      <div className="ui row">
        <div className="column twelve wide">
          <Router />
        </div>
      </div>
    </div>
  );
}
