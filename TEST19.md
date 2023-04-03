# Prueba de aptitudes #19

La siguiente es una prueba que tiene como objetivo conocer el nivel de abstracción, lógica,
investigación, recursividad y velocidad de aprendizaje del aplicante. La prueba no tiene como
objetivo asustarlo, todo lo contrario: está diseñada para medir su nivel de curiosidad y su
pasión por la tecnología.

Lenguaje de programación: De libre elección   
## Objetivo:
Implementar una función que resuelva el problema de la mochila (Knapsack problem) en el
lenguaje de su elección.  
## Descripción:
El problema de la mochila consiste en encontrar la mejor combinación de elementos que se
pueden llevar en una mochila de capacidad limitada. Cada elemento tiene un peso y un valor
asociado, y el objetivo es maximizar el valor de los elementos llevados en la mochila sin
exceder su capacidad.   
Implementar una función que reciba como parámetros una lista de elementos con su peso y
valor, la capacidad máxima de la mochila y devuelva una lista de los elementos que deben ser
llevados para maximizar el valor total, junto con el valor total obtenido.   

Las reglas de la mochila son:   
- Cada elemento puede ser llevado solo una vez.
- La capacidad de la mochila es limitada.
- El valor de cada elemento es proporcional a su peso.
- El peso de cada elemento no puede exceder la capacidad de la mochila.  
### Aclaración:
- No se deben utilizar librerías que resuelvan el problema directamente.
- Debe realizarse una implementación desde cero del algoritmo para resolver el
problema.   
### Ejemplo:
Suponga que se tienen los siguientes elementos:
```JAVASCRIPT
elementos = [[2, 3], [3, 4], [4, 5], [5, 6]];
```
donde cada elemento i está dado por su peso y valor (wi,vi).
Si se tiene una mochila con capacidad máxima de 8, entonces la combinación óptima de
elementos es (2, 3), (3, 4) y (5, 6), con un valor total de 13.
La función debe recibir la lista de elementos y la capacidad máxima de la mochila, y devolver
una lista de los elementos llevados y el valor total obtenido.

### Bonus
1. Implemente la función en Apex, el lenguaje de programación de Salesforce.   
    a. Solicite a su evaluador un ambiente de prueba para desarrollar el código.
2. Modifique el algoritmo para que la función devuelva también la combinación de elementos que no se llevan y su valor total.