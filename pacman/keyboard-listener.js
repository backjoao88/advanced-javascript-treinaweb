export default function KeyboardListener(document){

  const state = {
    observers: [],
  }

  function subscribe(fn){
    state.observers.push(fn);
  }

  function notifyAll(command){
    console.log(`Notifying ${state.observers.length} observers.`);
    state.observers.forEach((obj) => {
      obj.moveCharacter(command);
    });
  }

  document.addEventListener('keydown', handleKeydown)
  function handleKeydown(event){
    notifyAll(event.key);
  }

  return {
    subscribe
  }

}