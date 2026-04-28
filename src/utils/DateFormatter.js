class DateFormatter {
    static formatToBrazilian(date) {
        const dateObj = new Date(date);
        return dateObj.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    static formatArrayToBrazilian(array, dateField) {
        return array.map(item => {
            const formattedItem = { ...item };
            formattedItem[dateField] = this.formatToBrazilian(item[dateField]);
            return formattedItem;
        });
    }
}

export default DateFormatter;
