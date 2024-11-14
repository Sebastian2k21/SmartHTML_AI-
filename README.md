
# Aplikacja App_smart_html

Ten projekt to aplikacja webowa oparta na React, która umożliwia użytkownikom strukturyzowanie tekstu w formacie HTML przy użyciu API OpenAI. Aplikacja zapewnia funkcjonalność formatowania artykułów do uporządkowanego HTML-a, sugerując miejsca na obrazy oraz alternatywne teksty. Dodatkowo, umożliwia wstawienie artykułu do istniejącego szablonu HTML.

## Funkcje

- **Strukturyzowanie tekstu**: Konwersja surowego tekstu do HTML z miejscami na obrazy i podpisami, z użyciem API OpenAI.
- **Wstawienie do szablonu HTML**: Osadzanie ustrukturyzowanego artykułu w dostarczonym szablonie.
- **Obsługa plików**: Obsługuje przesyłanie plików tekstowych oraz HTML, a także pozwala na pobieranie wygenerowanych plików HTML.
- **Integracja z OpenAI**: Wykorzystuje API OpenAI do przetwarzania i strukturyzowania tekstu.

## Wymagania

- **Node.js** , **npm** oraz **openai**: Upewnij się, że masz zainstalowane Node.js i npm.
- **Klucz API OpenAI**: Aplikacja wymaga klucza API z OpenAI. Skonfiguruj zmienną środowiskową `REACT_APP_OPENAI_API_KEY`, aby przechować swój klucz.

## Rozpoczęcie pracy

1. Sklonuj repozytorium:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Skonfiguruj zmienne środowiskowe:

 Utwórz plik `.env` w katalogu głównym projektu i dodaj swój klucz API OpenAI:

```plaintext
REACT_APP_OPENAI_API_KEY=twoj_klucz_api_openai
```

Zastąp `twoj_klucz_api_openai` swoim rzeczywistym kluczem API OpenAI.


4. Uruchom aplikację:

   ```bash
   npm start
   ```

5. Uzyskaj dostęp do aplikacji pod adresem `http://localhost:3000`.

## Użytkowanie

### Strukturyzowanie tekstu do HTML

1. **Prześlij plik tekstowy**: W sekcji **Insert article to HTML** kliknij i prześlij plik tekstowy.
2. **Zatwierdź plik**: Po przesłaniu kliknij przycisk **Request AI**.
3. **Pobierz wynik**: Po przetworzeniu, pobierz wygenerowany plik HTML.

### Wstawianie artykułu do szablonu

1. **Prześlij plik artykułu i szablonu**: W sekcji **Insert article into template** prześlij zarówno plik artykułu, jak i szablonu.
2. **Zatwierdź pliki**: Kliknij **Submit** po załadowaniu obu plików.
3. **Pobierz wynik**: Po przetworzeniu pobierz plik HTML zawierający artykuł osadzony w szablonie.
   

