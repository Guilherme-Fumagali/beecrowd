# -*- coding: utf-8 -*-

'''
O Maior

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”
'''

def main():
    a, b, c = map(float, input().split())
    print(f'{int(maior(a, b, c))} eh o maior')

def maior(n1, n2 , n3):
    maiorAB = (n1+n2+abs(n1-n2))/2
    return (maiorAB+n3+abs(maiorAB-n3))/2

main()