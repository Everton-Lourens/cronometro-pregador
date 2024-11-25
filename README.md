# Timer para Pregação

Este aplicativo foi desenvolvido para auxiliar os pregadores a gerenciarem o tempo de suas mensagens de maneira prática e visual, com notificações e alertas que indicam o tempo restante de pregação.

## Funcionalidades

- **Timer Configurável via código**: Defina o dia e o horário da pregação antes de dá um build no electron.
- **Interface Simples**: Um cronômetro fácil de visualizar e acompanhar.

## Tecnologias Utilizadas

- Linguagem de programação: **Node.js**
- Frontend básico com **Electron**, **HTML**, **CSS** e **JavaScript** para a exibição do cronômetro.

## Como Funciona

**OBS::: SE COLOCAR PARA INICIAR ÀS 19:00, VAI APARECER O CRONÓMETRO APENAS ÀS 19:30 (para finalizar às 20:00), ANTES DISSO APARECE APENAS O RELÓGIO!!**

1. O DEVELOPER define o tempo inicial da pregação via código js.
2. O cronômetro inicia automaticamente: Se colocar 19 o início, ele vai começar 19:30 mas da pra mudar conforme sua vontade.
3. Quando o tempo restante for menor que 7 minutos:
   - A cor do cronômetro muda para **amarelo**.
4. Quando o tempo restante for menor que 2 minutos:
   - A cor do cronômetro muda para **vermelho**.
5. Quando o tempo for excedido:
   - A cor muda para **vermelho e pisca**.
   - mostra a quantidade de tempo que está excedeu

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Everton-Lourens/cronometro-pregador.git