body {
    font-family: 'Inter', sans-serif;
    background-color: #f0f2f5;
}
/* Clase para ocultar vistas que no están activas */
.hidden {
    display: none;
}
/* Estilos personalizados para el mapa de asientos */
.seat {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9ca3af;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 500;
}
.seat.available { background-color: #d1fae5; color: #065f46; }
.seat.available:hover { background-color: #a7f3d0; }
.seat.selected { background-color: #8b5cf6; color: white; border-color: #7c3aed; }
.seat.occupied { background-color: #e5e7eb; color: #6b7280; cursor: not-allowed; }

