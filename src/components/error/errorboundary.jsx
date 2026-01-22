import { Component } from "react";
import ErrorComponent from "./error";


export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.

      return { hasError: true, error: error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('ERRORE ' , error, errorInfo);
      console.table(error);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        const text = this.state.error.message;
        return <ErrorComponent text={text} />
      }
  
      return this.props.children; 
    }
  }