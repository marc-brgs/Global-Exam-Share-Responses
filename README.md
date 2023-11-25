# Global Exam Share Responses

Ce projet permet seulement de récupérer rapidement les réponses aux questions de chaque exercice proposé sur la plateforme Global Exam afin de les envoyer à ses amis pour les aider à alléger leur travail.\
Comme rien n'est magique il est évidemment nécessaire d'avoir terminé l'exercice et d'avoir accès aux réponses "légalement".

## Comment l'utiliser

Sur le site Global Exam, un parcours est normalement composé de plusieurs étapes, qui sont eux même composé de plusieurs exercices, eux même composés de plusieurs questions.\
Pour utiliser n'importe qu'elle méthode vous deverez **copier le code qui se trouve dans `console.js` et le coller dans la console javascript** `F12`.

### Méthode 1 : getAllExo

1) Sélectionnez le parcours d'exercices qui vous intéresse.
2) Vous devrez ensuite récupérer l'id de l'étape du parcours en faisant `RIGHT-CLICK` sur le nom de l'étape puis `Inspecter`. Vous devrez trouver un id ressemblant à ceci `pm-33095` sur un élement parent de celui inspecté.
3) Utilisez la méthode suivante dans la console (en prenant soin de remplacer l'id de l'étape par le votre) : `GlobalExamParser.getAllExo("pm-33095")`
4) Attendez la fin de l'execution de la méthode et vous trouverez les résultats correctement formatés des exercices de l'étape donnée dans la console.

### Méthode 2 : getExo

1) Sélectionnez le parcours d'exercices qui vous intéresse.
2) Sélectionnez l'exercice à récupérer les réponses.
3) Utilisez la méthode suivante dans la console : `GlobalExamParser.getExo()`
4) Vous trouverez les résultats correctement formatés de l'exercice dans la console.

## Dédicaces

Dédicace à toute l'équipe.\
\
Coach
