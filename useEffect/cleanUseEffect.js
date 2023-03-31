// ejemplo de como hacer un efecto y limpiar la ejeciucion

useEffect(() => {
    if (playerStore.isCasting) return undefined;
    return () => {
      playerStore.handleStopConcurrency();
    };
  }, [playerStore.isCasting]);