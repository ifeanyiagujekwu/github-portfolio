import "./App.css";
import RepositoryList from "./RepositoryList";
import ErrorBoundary from "./ErrorBoundary";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <div>
      <RepositoryList />
      <ErrorBoundary />
      <NotFoundPage />

    </div>
  );
}

export default App;
