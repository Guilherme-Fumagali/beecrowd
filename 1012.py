# -*- coding: utf-8 -*-
""" 
Área

Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
"""
def main():
    A, B, C = map(float, input().split())

    print(f'TRIANGULO: {triangleArea(A, C):.3f}')
    print(f'CIRCULO: {circleArea(C):.3f}')
    print(f'TRAPEZIO: {trapeziumArea(A, B, C):.3f}')
    print(f'QUADRADO: {squareArea(B):.3f}')
    print(f'RETANGULO: {rectangleArea(A, B):.3f}')

def triangleArea(base, height):
    return base * height / 2

def circleArea(radius):
    PI = 3.14159
    return  PI * radius**2

def trapeziumArea(baseA, baseB, height):
    return (baseA + baseB) * 0.5 * height

def squareArea(side):
    return side**2

def rectangleArea(sideA, sideB):
    return sideA * sideB

main()